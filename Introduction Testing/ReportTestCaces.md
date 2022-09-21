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
>> valiadtion of **First name** and **Last name** isn't work
<img src=".\p3.png">
We can enter name start with digits, special symbols isn't correct behavior, but empty data handle

>> 1.1.3 How do you want to pay?
>> It use **algorithm Luna**, that why it doesn't handle unvalid card (impressiv me)
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
System isn't offer any Sign Up, bad functionality
We can only __Sing In__ by __Apple ID__ 
<img src=".\p8.png">

