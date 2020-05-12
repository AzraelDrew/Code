import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
def get_data(file_name):
    data = pd.read_csv(file_name)
    X_parameter = []
    Y_parameter = []
    for single_square_feet,single_price_value in zip(data['square_feet'],data['price']):
        X_parameter.append([float(single_square_feet)])
        Y_parameter.append(float(single_price_value))
    print (X_parameter)
    print (Y_parameter)
    return X_parameter,Y_parameter
def linear_model_main(X_parameter,Y_parameter,predict_square_feet):
    regr = LinearRegression()
    regr.fit(X_parameter,Y_parameter)
    predict_outcome = regr.predict(predict_square_feet)
    predictions = {}
    predictions['截距值intercept'] = regr.intercept_
    predictions['回归系数（斜率值）coefficient'] = regr.coef_
    predictions['预测值predict_value'] = predict_outcome
    return predictions
def show_linear_line(X_parameter,Y_parameter):
    regr = LinearRegression()
    regr.fit(X_parameter,Y_parameter)
    plt.scatter(X_parameter,Y_parameter,color = 'blue')
    plt.plot(X_parameter,regr.predict(X_parameter),color = 'red',linewidth = 4)
    plt.title('Predict the house price')
    plt.xlabel('square feet')
    plt.ylabel('price')
    plt.show()
def main():
    X,Y=get_data('D:/Python/input_data.csv')
    predict_square_feet = [700]
    result = linear_model_main(X, Y, [predict_square_feet])
    for key, value in result.items():
        print ('{0}:{1}'.format(key, value))
    show_linear_line(X, Y)
if __name__ == '__main__':
    main()
