from flask import Flask, request, jsonify
from flask_cors import CORS
import boto3
import base64
from datetime import datetime
import traceback
import uuid

app = Flask(__name__)
CORS(app)


session = boto3.Session()
s3 = session.client('s3')
rekognition = session.client('rekognition')
dynamodb = session.resource('dynamodb')
clockin_table = dynamodb.Table('ClockInRecords')
clockout_table = dynamodb.Table('ClockOutRecords')
print("AWS Region:", session.region_name)

@app.route('/add-employee', methods=['POST'])
def add_employee():
    try:
        data = request.get_json()
        employee_id = data['employeeId']
        first_name = data['firstName']
        last_name = data['lastName']
        department = data['department']
        team = data['team']
        image_data = data['image']

        image = base64.b64decode(image_data.split(',')[1])
        bucket_name = 'projectkedhar'
        key = f'employees/{datetime.now().strftime("%Y%m%d%H%M%S")}-{first_name}-{last_name}.jpg'
        s3.put_object(Bucket=bucket_name, Key=key, Body=image, ContentType='image/jpeg')

        image_url = f'https://{bucket_name}.s3.amazonaws.com/{key}'

        table = dynamodb.Table('Employees')
        employee = {
            'id': str(uuid.uuid4()),
            'employeeId': employee_id,  
            'firstName': first_name,
            'lastName': last_name,
            'department': department,
            'team': team,
            'imageUrl': image_url,
        }
        table.put_item(Item=employee)

        return jsonify({'success': True, 'employee': employee}), 200
  

    except Exception as e:
        print("Error:", e)
        print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/employees', methods=['GET'])
def list_employees():
    try:
        table = dynamodb.Table('Employees')
        response = table.scan()
        employees = response['Items']
        return jsonify(employees), 200
    except Exception as e:
        print("Error:", e)
        print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/clock-in', methods=['POST'])
def clock_in():
    try:
        data = request.get_json()
        captured_image = data['image']
        captured_image_bytes = base64.b64decode(captured_image.split(',')[1])

        
        table = dynamodb.Table('Employees')
        response = table.scan()
        employees = response['Items']

        for employee in employees:
            image_url = employee['imageUrl']
            key = image_url.split('https://projectkedhar.s3.amazonaws.com/')[1]
            print(f"Trying to get object with key: {key}")

            try:
                s3_object = s3.get_object(Bucket='projectkedhar', Key=key)
                stored_image = s3_object['Body'].read()

                
                response = rekognition.compare_faces(
                    SourceImage={'Bytes': captured_image_bytes},
                    TargetImage={'Bytes': stored_image},
                    SimilarityThreshold=90
                )

                if response['FaceMatches']:
                    
                    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                    record = {
                        'id': str(uuid.uuid4()),
                        'employeeId': employee['id'],
                        'firstName': employee['firstName'],
                        'lastName': employee['lastName'],
                        'department': employee['department'],
                        'team': employee['team'],
                        'timestamp': timestamp,
                        'image': captured_image
                    }
                    clockin_table.put_item(Item=record)
                    return jsonify({
                        'success': True,
                        'employee': employee,
                        'capturedImage': captured_image
                    }), 200
            except Exception as e:
                print(f"Error fetching object {key}: {e}")

        return jsonify({'success': False, 'error': 'No matching faces found'}), 404

    except Exception as e:
        print("Error:", e)
        print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500
    


@app.route('/clock-out', methods=['POST'])
def clock_out():
    try:
        data = request.get_json()
        captured_image = data['image']
        captured_image_bytes = base64.b64decode(captured_image.split(',')[1])

        table = dynamodb.Table('Employees')
        response = table.scan()
        employees = response['Items']

        for employee in employees:
            image_url = employee['imageUrl']
            key = image_url.split('https://projectkedhar.s3.amazonaws.com/')[1]
            print(f"Trying to get object with key: {key}")

            try:
                s3_object = s3.get_object(Bucket='projectkedhar', Key=key)
                stored_image = s3_object['Body'].read()

                response = rekognition.compare_faces(
                    SourceImage={'Bytes': captured_image_bytes},
                    TargetImage={'Bytes': stored_image},
                    SimilarityThreshold=90
                )

                if response['FaceMatches']:
                    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                    record = {
                        'id': str(uuid.uuid4()),
                        'employeeId': employee['id'],
                        'firstName': employee['firstName'],
                        'lastName': employee['lastName'],
                        'department': employee['department'],
                        'team': employee['team'],
                        'timestamp': timestamp,
                        'image': captured_image
                    }
                    clockout_table.put_item(Item=record)  # Store in clock-out table
                    return jsonify({
                        'success': True, 
                        'employee': employee,
                        'capturedImage': captured_image
                    }), 200
            except Exception as e:
                print(f"Error fetching object {key}: {e}")

        return jsonify({'success': False, 'error': 'No matching faces found'}), 404

    except Exception as e:
        print("Error:", e)
        print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500

    

# @app.route('/clock-out', methods=['POST'])
# def clock_out():
#     try:
#         data = request.get_json()
#         captured_image = data['image']
#         captured_image_bytes = base64.b64decode(captured_image.split(',')[1])

        
#         table = dynamodb.Table('Employees')
#         response = table.scan()
#         employees = response['Items']

#         for employee in employees:
#             image_url = employee['imageUrl']
#             key = image_url.split('https://projectkedhar.s3.amazonaws.com/')[1]
#             print(f"Trying to get object with key: {key}")

#             try:
#                 s3_object = s3.get_object(Bucket='projectkedhar', Key=key)
#                 stored_image = s3_object['Body'].read()

                
#                 response = rekognition.compare_faces(
#                     SourceImage={'Bytes': captured_image_bytes},
#                     TargetImage={'Bytes': stored_image},
#                     SimilarityThreshold=90
#                 )

#                 if response['FaceMatches']:
                    
#                     timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
#                     record = {
#                         'id': str(uuid.uuid4()),
#                         'employeeId': employee['id'],
#                         'firstName': employee['firstName'],
#                         'lastName': employee['lastName'],
#                         'department': employee['department'],
#                         'team': employee['team'],
#                         'timestamp': timestamp,
#                         'image': captured_image
#                     }
#                     clockin_table.put_item(Item=record)
#                     return jsonify({
#                         'success': True,
#                         'employee': employee,
#                         'capturedImage': captured_image
#                     }), 200
#             except Exception as e:
#                 print(f"Error fetching object {key}: {e}")

#         return jsonify({'success': False, 'error': 'No matching faces found'}), 404

#     except Exception as e:
#         print("Error:", e)
#         print(traceback.format_exc())
#         return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/delete-employee/<id>', methods=['DELETE'])
def delete_employee(id):
    try:
        table = dynamodb.Table('Employees')

        response = table.get_item(Key={'id': id})
        employee = response.get('Item')

        if not employee:
            return jsonify({'success': False, 'error': 'Employee not found'}), 404

        image_url = employee['imageUrl']
        bucket_name = 'projectkedhar'
        key = image_url.split(f'https://{bucket_name}.s3.amazonaws.com/')[1]

        s3.delete_object(Bucket=bucket_name, Key=key)

        table.delete_item(Key={'id': id})

        return jsonify({'success': True}), 200
    except Exception as e:
        print("Error:", e)
        print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/face-login', methods=['POST'])
def face_login():
    try:
        data = request.get_json()
        image = data['image']
        image_bytes = base64.b64decode(image.split(',')[1])

        table = dynamodb.Table('Employees')
        response = table.scan()
        employees = response['Items']

        for employee in employees:
            image_url = employee['imageUrl']
            key = image_url.split('https://projectkedhar.s3.amazonaws.com/')[1]

            try:
                s3_object = s3.get_object(Bucket='projectkedhar', Key=key)
                stored_image = s3_object['Body'].read()

                response = rekognition.compare_faces(
                    SourceImage={'Bytes': image_bytes},
                    TargetImage={'Bytes': stored_image},
                    SimilarityThreshold=90
                )

                if response['FaceMatches']:
                    return jsonify({
                        'success': True,
                        'username': employee['firstName'] + " " + employee['lastName']
                    }), 200
            except Exception as e:
                print(f"Error fetching object {key}: {e}")

        return jsonify({'success': False, 'error': 'No matching faces found'}), 404

    except Exception as e:
        print("Error:", e)
        print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500
    
@app.route('/employee/<id>', methods=['GET'])
def get_employee(id):
    try:
        table = dynamodb.Table('Employees')
        response = table.get_item(Key={'id': id})
        if 'Item' in response:
            return jsonify(response['Item']), 200
        else:
            return jsonify({'error': 'Employee not found'}), 404
    
    except Exception as e:
        print("Error:", e)
        print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500
    
@app.route('/clock-in-records', methods=['GET'])
def get_clock_in_records():
    try:
        clock_in_table = dynamodb.Table('ClockInRecords')
        response = clock_in_table.scan()
        records = response['Items']
        return jsonify(records), 200
    except Exception as e:
        print("Error:", e)
        return jsonify({'success': False, 'error': str(e)}), 500
    

# @app.route('/clock-out-records', methods=['GET'])
# def get_clock_out_records():
#     try:
#         clock_in_table = dynamodb.Table('ClockOutRecords')
#         response = clock_in_table.scan()
#         records = response['Items']
#         return jsonify(records), 200
#     except Exception as e:
#         print("Error:", e)
#         return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/clock-out-records', methods=['GET'])
def get_clock_out_records():
    try:
        clock_out_table = dynamodb.Table('ClockOutRecords')
        response = clock_out_table.scan()
        records = response['Items']
        return jsonify(records), 200
    except Exception as e:
        print("Error:", e)
        return jsonify({'success': False, 'error': str(e)}), 500
@app.route('/update-profile', methods=['POST'])
def update_profile():
    try:
        data = request.get_json()
        user_id = data['userId']
        update_fields = data['updateFields']

        table = dynamodb.Table('Users')
        update_expression = "SET " + ", ".join(f"{k}=:{k}" for k in update_fields.keys())
        expression_attribute_values = {f":{k}": v for k, v in update_fields.items()}

        table.update_item(
            Key={'id': user_id},
            UpdateExpression=update_expression,
            ExpressionAttributeValues=expression_attribute_values
        )

        return jsonify({'success': True}), 200
    except Exception as e:
        print("Error:", e)
        print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500
    
@app.route('/dashboard-metrics', methods=['GET'])
def get_dashboard_metrics():
    try:
        employees_table = dynamodb.Table('Employees')
        records_table = dynamodb.Table('ClockInRecords')

        # Total number of employees
        employees_response = employees_table.scan()
        employees_count = employees_response['Count']
        print("Employees response:", employees_response)

        # Total number of clock-ins for today
        today = datetime.now().strftime('%Y-%m-%d')
        clock_ins_response = records_table.scan(
            FilterExpression="contains(clockInTime, :today)",
            ExpressionAttributeValues={":today": today}
        )
        clock_ins_today = clock_ins_response['Count']
        print("Clock-ins response:", clock_ins_response)

        # Fetch recent clock-in activity
        recent_clock_ins_response = records_table.scan()
        recent_clock_ins = sorted(recent_clock_ins_response['Items'], key=lambda x: x['clockInTime'], reverse=True)[:5]
        print("Recent clock-ins response:", recent_clock_ins_response)

        metrics = {
            'totalEmployees': employees_count,
            'clockInsToday': clock_ins_today,
            'recentClockIns': recent_clock_ins
        }

        return jsonify(metrics), 200

    except Exception as e:
        print("Error:", e)
        print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500


    
@app.route('/update-employee/<id>', methods=['PUT'])
def update_employee(id):
    try:
        data = request.get_json()
        table = dynamodb.Table('Employees')

        update_expression = "set firstName=:fn, lastName=:ln, department=:d, team=:t, employeeId=:eid"
        expression_attribute_values = {
            ':fn': data['firstName'],
            ':ln': data['lastName'],
            ':d': data['department'],
            ':t': data['team'],
            ':eid': data['employeeId']
        }

        table.update_item(
            Key={'id': id},
            UpdateExpression=update_expression,
            ExpressionAttributeValues=expression_attribute_values
        )

        return jsonify({'success': True}), 200


    except Exception as e:
        print("Error:", e)
        print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True)
