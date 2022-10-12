# <h1 align="center"> My Report Test Case </h3>
---
### <p align="right">Created at: 09-21-2022</p>
### <p align="right">Updated at: 09-21-2022</p>
### <p align="right">Author: [Anton Tkachou](https://www.linkedin.com/in/anton-tkachou/)</p>
### <p>URL: [Site to test](http://apple.com) </p>
---
## <h1 align="center"> Test case </h3>
## 1. Buying 
> ## Requirements:
>> 1. All fields should take only valid data 
>> 2. Check out test on fields
>> 3. Test business functionality

## Prerequisite
### Flow start from [page](https://secure2.store.apple.com/uk/shop/checkout?_s=Fulfillment-init)
<!-- ![alt text] -->
<img src=".\p1.png">

---


> ## 1.1 Example 1 (I'll pick it up) 
>> 1.1.1 Chouse location, recieve the closer place for my address 
<img src=".\p2.png">

>> 1.1.2 Who will pick up your order?
>>> Требование:
>>> 1. Имя должно быть не пустым
>>> 2. Имя не должно начинаться с цифры
>>> 3. Имя не может содержать специальные символы
>>> 4. Имя не может состоять из 1 буквы
>>> 5. Старт имени с большой буквы

>>> Вопросы:
>>> 1. Минимальное значение имени
>>> 2. Максимальное значение имени
>>> 3. Имя на разных языках 

>>> First name
>>>> не пустое
>>>> можно использовать любые символы
>>>> имя на разных языка не принимает
>>>> минимум 1 символ
>>>> max 14
>>>> apply special symbols
>>>> apply space + characther  

>>> Second name
>>>> не пустое
>>>> можно использовать любые символы
>>>> имя на разных языка не принимает
>>>> минимум 1 символ
>>>> max 14
>>>> apply special symbols
>>>> apply space + characther  

>>> Email Address
>>>> validation regex is (\s+@\s+.\s+) 
>>>> нет ограничений по длинне 
>>>> space isn't apply 

>>> Phone
>>>> не пустой
>>>> валидация регулярным выражением

 
>> valiadtion of **First name** and **Last name** isn't work
<img src=".\p3.png">
<img src=".\P13.png">
We can enter name start with digits, special symbols isn't correct behavior, but empty data handle

>> 1.1.3 How do you want to pay?
>> It use **algorithm Luna**, that why it doesn't handle unvalid card (impressiv me)
>>> Требование:
>>> 1. Номер должно быть не пустым
>>> 2. 16 цифр должно быть 
>>> 3. Имя не может содержать специальные символы

>>> Вопросы:
>>> 1. Ввод не валидной карты

>>> Card number
>>>> 1. не пустое
>>>> 2. 16 цифр
>>>> 3. не содержит символы не цифры
>>>> 4. проверка алгоритмом Луна на валидность 

<img src=".\p4.png">
>> Billing address can be unvalid in **First name and Last name**
<img src=".\p5.png">
>> For _paypal_ payflow is same  

> ## 1.2 Example 2 (I’d like it delivered)
>> 1.2.1 Enter your name.
valiadtion of **First name** and **Last name** isn't work
<img src=".\p3.png">
We can enter name start with digits, special symbols isn't correct behavior, but empty data handle

>> 1.2.2 Tell us your shipping address.
Working succed
<img src=".\p6.png">

>> 1.2.3 What’s your contact information?
Email regex is not working
Phone number is valid using 
<img src=".\p7.png">

## 2. Sign Up
>> 2.1 You can enter `unvalid` __firts name__ and __second name__,  `valid` __B-day__!
>>> Требование:
>>> 1. Имя должно быть не пустым
>>> 2. Имя не должно начинаться с цифры
>>> 3. Имя не может содержать специальные символы
>>> 4. Имя не может состоять из 1 буквы
>>> 5. Старт имени с большой буквы

>>> Вопросы:
>>> 1. Минимальное значение имени
>>> 2. Максимальное значение имени
>>> 3. Имя на разных языках 

>>> First name
>>>> не пустое
>>>> можно использовать любые символы
>>>> имя на разных языка не принимает
>>>> минимум 1 символ
>>>> max 14
>>>> apply special symbols
>>>> apply space + characther  

>>> Second name
>>>> не пустое
>>>> можно использовать любые символы
>>>> имя на разных языка не принимает
>>>> минимум 1 символ
>>>> max 14
>>>> apply special symbols
>>>> apply space + characther  

>>> Требование:
>>> 1. Дата должна быть не будущим
>>> 2. Проверка на возрост совершенолетеия 
>>> 3. Валидный день, месяц, год
>>> 4. Не буквы

>>> B-day
>>>> 1. Нельзя будущую дату
>>>> 2. Проверка на 18 лет 
>>>> 3. Проверка на дни(1-31), месяцы(1-12), годы(19xx-20xx)
>>>> 4. Запрет букв



<img src=".\p10.png">
<img src=".\p11.png">
>> 2.2 `Validation Password and Email`.
<img src=".\p9.png">
<img src=".\p12.png">

# Table TestCase
<img src=".\table.png">