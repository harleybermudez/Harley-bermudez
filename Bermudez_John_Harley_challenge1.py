#Bermudez_John_Harley_BSCS_1D
#No.1
students= []
#No.2 

students.append({"Name": "Marcus Reyes", "Age": 20, "Math": 85, "English": 89, "Filipino": 84, "Science": 88, "History": 86, "Arts": 91, "Sports": 83})
students.append({"Name": "Sofia Martinez", "Age": 21, "Math": 92, "English": 94, "Filipino": 90, "Science": 93, "History": 89, "Arts": 97, "Sports": 92})
students.append({"Name": "Jamal Robinson", "Age": 20, "Math": 78, "English": 83, "Filipino": 80, "Science": 81, "History": 79, "Arts": 85, "Sports": 87})
students.append({"Name": "Ayesha Patel", "Age": 20, "Math": 88, "English": 91, "Filipino": 89, "Science": 87, "History": 90, "Arts": 93, "Sports": 84})
students.append({"Name": "Liam O'Connor", "Age": 22, "Math": 81, "English": 79, "Filipino": 82, "Science": 83, "History": 80, "Arts": 88, "Sports": 86})
students.append({"Name": "Mei Chen", "Age": 19, "Math": 90, "English": 88, "Filipino": 92, "Science": 91, "History": 94, "Arts": 95, "Sports": 89})
students.append({"Name": "Carlos Gutierrez", "Age": 21, "Math": 83, "English": 85, "Filipino": 87, "Science": 84, "History": 81, "Arts": 86, "Sports": 88})
students.append({"Name": "Priya Sharma", "Age": 21, "Math": 94, "English": 93, "Filipino": 91, "Science": 96, "History": 95, "Arts": 98, "Sports": 90})
students.append({"Name": "Andre Baptiste", "Age": 20, "Math": 79, "English": 82, "Filipino": 81, "Science": 80, "History": 78, "Arts": 84, "Sports": 85})
students.append({"Name": "Hana Kimura", "Age": 20, "Math": 91, "English": 92, "Filipino": 90, "Science": 89, "History": 88, "Arts": 96, "Sports": 91})           

for x in students:
    print(x)

#No.3
name = students[5]
for key, value in name.items():
    if key != "Name" and key != "Age":  
        print(key, ":", value)

#No.4

new_grade = {"Math":90, "Filipino":92, "History":85}

for student in students:
    if student["Name"] == "Sofia Martinez":
        student.update(new_grade)
        for x in student:
            print(x, ":", student[x])