var template = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement("h1", null, "Hello ", React.createElement("span", {onClick: "javascript:this.innerHTML = 'change'"}, streamer)
)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtZXIiLCJzb3VyY2VzIjpbInN0cmVhbWVyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUEsUUFBQSxFQUFNLG9CQUFBLE1BQUssRUFBQSxDQUFBLENBQUMsT0FBQSxFQUFPLENBQUMsc0NBQXVDLENBQUEsRUFBQyxRQUFnQixDQUFBO0FBQzNFIiwic291cmNlc0NvbnRlbnQiOlsiPGgxPkhlbGxvXHQ8c3BhbiBvbkNsaWNrPVwiamF2YXNjcmlwdDp0aGlzLmlubmVySFRNTCA9ICdjaGFuZ2UnXCI+e3N0cmVhbWVyfTwvc3Bhbj5cclxuPC9oMT4iXX0=
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return React[options.render](nodes);
}