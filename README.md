Smart MessagePub
=============================================================
This a [Message Pub](http://messagepub.com) library for the 
[Joyent Smart Platform](http://smart.joyent.com/). This library gives
you the ability to send AIM, Google Chat, Email, Twitter, Phone, 
and SMS on the smart platform.

Get Started
-------------------------------------------------------------
run the following from the root of your application to add
smart-messagepub as a git submodule:

    git submodule add git://github.com/sintaxi/smart-messagepub.git js/smart-messagepub
    
In your `bootstrap.js` file tell your smart application to use smart-messagepub:

    system.use("smart-messagepub.init")

API
-------------------------------------------------------------

create messagepub client

    messagepub = new MessagePub("YOURAPIKEY");
    
get latest notifications from your account

    notifications = messagepub.notifications();
    
get notification with id = 1

    notification = messagepub.notification(1);
    
create a new notification

    notification = new MessagePub.Notification({ body: "hey man, loving the eternal", 
                    recipients: [
                      {position: 1, channel: "email", address: "thurson@sonicyouth.com" }
                      {position: 1, channel: "phone", address: "5555555" }
                    ]});
    
    messagepub.send(notification);
    
see [messagepub API reference](http://messagepub.com/documentation/api) for more details.
        
### coming soon

get all replies from your account (not yet implemented)

    replies = messagepub.replies();


The MIT License
-------------------------------------------------------------
Copyright (c) 2009 Brock Whitten

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.