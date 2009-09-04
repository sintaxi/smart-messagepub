// MessagePub Client
// 
var MessagePub = function(api_key){
  this.site = "http://" + api_key + "@messagepub.com/"
}

MessagePub.prototype = {
  
  send: function(notification){
    uri = this.site + "notifications.xml"
    response = system.http.request('POST', uri, ["Content-Type", "application/xml"], notification.to_xml())
    
    if ( response.code == 200 && response.content ) {
      var feedXML = response.content.replace(/^<\?xml\s+version\s*=\s*(["'])[^\1]+\1[^?]*\?>/, ""); // bug 336551
      var feed = new XML(feedXML)
      return MessagePub.Parse.notification(feed)
    }else{
      return null
    }
  },
  
  notifications: function(){    
    uri = this.site + "notifications.xml"
    response = system.http.request('GET', uri)
    if ( response.code == 200 && response.content ) {
      var feedXML = response.content.replace(/^<\?xml\s+version\s*=\s*(["'])[^\1]+\1[^?]*\?>/, ""); // bug 336551
      var feed = new XML(feedXML)
      return MessagePub.Parse.notifications(feed)
    }else{
      return null
    }
  },
  
  notification: function(id){
    uri = this.site + "notifications/" + id + ".xml"
    response = system.http.request('GET', uri)
    if ( response.code == 200 && response.content ) {
      var feedXML = response.content.replace(/^<\?xml\s+version\s*=\s*(["'])[^\1]+\1[^?]*\?>/, ""); // bug 336551
      var feed = new XML(feedXML)
      return MessagePub.Parse.notification(feed)
    }else{
      return null
    }
  }      
        
}