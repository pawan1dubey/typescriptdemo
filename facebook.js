var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.uplaodprofilepic = function () {
        console.log("Profile picture uploaded");
    };
    User.prototype.postcomment = function () { };
    ;
    User.prototype.likepost = function () { };
    ;
    User.prototype.unlikepost = function () { };
    ;
    User.prototype.uploadphoto = function () { };
    ;
    User.prototype.deletecomment = function () { };
    ;
    User.prototype.showpersonaldetails = function () { };
    ;
    User.prototype.editpersonaldetails = function () { };
    ;
    User.prototype.sendFriendRequest = function () { };
    ;
    User.prototype.acceptFriendRequest = function (user) { };
    ;
    User.prototype.deactivateaccount = function () { };
    ;
    User.prototype.deleteaccount = function () { };
    ;
    User.prototype.setUserID = function (id) {
        this.userid = id;
    };
    User.prototype.getUserid = function () {
        return this.userid;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setAge = function (age) {
        this.age = age;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setCurrentCity = function (currentcity) {
        this.currentcity = currentcity;
    };
    User.prototype.getCurrentCity = function () {
        return this.currentcity;
    };
    User.prototype.setprofilepicture = function (imgurl) {
        var img = new Image();
        img.src = imgurl;
        document.body.appendChild(img);
    };
    return User;
}());
var user1 = new User();
user1.setUserID("u123456");
user1.setName("john");
user1.setAge(28);
user1.setCurrentCity("London");
user1.setprofilepicture("dummy.jpg");
console.log("userid: " + user1.getUserid());
console.log("name: " + user1.getName());
console.log("Age: " + user1.getAge());
console.log("City: " + user1.getCurrentCity());
user1.uplaodprofilepic();
