// Parser
//
MessagePub.Parse = {
  
  notifications: function(feed){
    var notifications = []
    for each (n in feed.notification){
      notifications.push(MessagePub.Parse.notification(n))
    }
    return notifications
  },
  
  notification: function(n){
    var not = { id: n.id, escalation: n.escalation, body: n.body }
    not.recipients = []
    var recFeed = new XML(n.recipients)
    for each (r in recFeed.recipient){
      var rec = { channel: r.channel, address: r.address, status: r.status }
      not.recipients.push(rec)
    }
    return not
  }
  
}