import pandas as pd
from sklearn.linear_model import LinearRegression

# Example data
data = {
    'internal_marks': [45, 40, 48, 35, 50, 38, 42, 47, 44, 36],
    'total_marks': [50]*10,
    'gpa': [8.2, 7.5, 8.8, 6.9, 9.5, 7.2, 7.8, 8.6, 8.0, 7.0]
}
df = pd.DataFrame(data)

# Features and target
X = df[['internal_marks', 'total_marks']]
y = df['gpa']

# Train model
model = LinearRegression()
model.fit(X, y)

# Predict GPA for a new student
new_internal = 43
new_total = 50
predicted_gpa = model.predict([[new_internal, new_total]])
print(f"Predicted GPA: {predicted_gpa[0]:.2f}")