import pandas as pd
from sklearn.linear_model import LinearRegression

# Load data
df = pd.read_csv('student_gpa_data.csv')

# Features and target
X = df[['internal_marks', 'external_marks', 'total_marks']]
y = df['gpa']

# Train model
model = LinearRegression()
model.fit(X, y)

# Predict GPA for a new student
new_internal = 50
new_external = 35
new_total = new_internal + new_external
predicted_gpa = model.predict([[new_internal, new_external, new_total]])
print(f"Predicted GPA: {predicted_gpa[0]:.2f}")