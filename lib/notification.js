// Notifications
//
MessagePub.Notification = function(obj){
  this.body = obj.body;
  this.subject = obj.subject;
  this.recipients = obj.recipients;
}

MessagePub.Notification.prototype.destroy = function(){
  return "destroying notification " + this.body
}

MessagePub.Notification.prototype.to_xml = function(){
  var notification_xml = "<notification><body>" + this.body + "</body>"
  if(this.subject) {
    notification_xml += "<subject>" + this.subject + "</subject>"
  }
  notification_xml += "<escalation>30</escalation><recipients>"
  for each (r in this.recipients){
    notification_xml += "<recipient><position>1</position><channel>" + r.channel + "</channel><address>" + r.address + "</address></recipient>"
  }
  notification_xml += "</recipients></notification>"
  return notification_xml
}