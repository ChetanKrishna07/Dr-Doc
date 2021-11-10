import pandas as pd
import sklearn
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

df1 = pd.read_csv('C:/Users/Arjun/Downloads/Dataset/Symptom.csv')
df2 = pd.read_csv('C:/Users/Arjun/Downloads/Dataset/Symptom Description.csv')
df3 = pd.read_csv('C:/Users/Arjun/Downloads/Dataset/Symptom Precaution.csv')
df4 = pd.read_csv('C:/Users/Arjun/Downloads/Dataset/Symptom Severity.csv')

combined_df = pd.merge(df1, df2, on = 'Disease')
combined_df = pd.merge(combined_df , df3, on = 'Disease')

x = combined_df[['Symptom_1', 'Symptom_2', 'Symptom_3','Symptom_4','Symptom_5']]
le = LabelEncoder()
for i in x.columns:
    x[i] = le.fit_transform(x[i].astype(str))
y = combined_df['Disease']

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=9)
rf=RandomForestClassifier(n_estimators=100)
rf.fit(x_train, y_train)
pred = rf.predict(x_test)
print(round(rf.score(x_test,y_test) * 100, 3),"%",sep="")
