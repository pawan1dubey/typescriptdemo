var Video = /** @class */ (function () {
    function Video() {
    }
    Video.prototype.play = function () {
        console.log("Video is being played");
    };
    ;
    Video.prototype.pause = function () { };
    ;
    Video.prototype.resume = function () { };
    ;
    Video.prototype.download = function () { };
    ;
    Video.prototype.getRelatedVidoes = function () { };
    ;
    Video.prototype.openPlaylist = function () { };
    ;
    Video.prototype.getvideoid = function () {
        return this._videoid;
    };
    Video.prototype.setvideoid = function (videoid) {
        this._videoid = videoid;
    };
    Video.prototype.getvideotitle = function () {
        return this._videotitle;
    };
    Video.prototype.setvideotitle = function (videotitle) {
        this._videotitle = videotitle;
    };
    Video.prototype.getnumberofviews = function () {
        return this._numberofviews;
    };
    Video.prototype.setnumberofviews = function (videotitle) {
        this._numberofviews = videotitle;
    };
    Video.prototype.getuploadedbyusername = function () {
        return this._uploadedbyusername;
    };
    Video.prototype.setuploadedbyusername = function (uploadedbyusername) {
        this._uploadedbyusername = uploadedbyusername;
    };
    Video.prototype.getnooflikes = function () {
        return this._nooflikes;
    };
    Video.prototype.setnooflikes = function (nooflikes) {
        this._nooflikes = nooflikes;
    };
    Video.prototype.getnoofdislikes = function () {
        return this._noofdislikes;
    };
    Video.prototype.setnoofdislikes = function (noofdislikes) {
        this._nooflikes = noofdislikes;
    };
    Video.prototype.getnoofshares = function () {
        return this._noofdislikes;
    };
    Video.prototype.setnoofshares = function (noofshares) {
        this._noofshares = noofshares;
    };
    Video.prototype.getnoofcomments = function () {
        return this._noofcomments;
    };
    Video.prototype.setnoofcomments = function (noofcomments) {
        this._noofcomments = noofcomments;
    };
    Video.prototype.getnoofsubscribers = function () {
        return this._noofsubscribers;
    };
    Video.prototype.setnoofsubscribers = function (noofsubscribers) {
        this._noofsubscribers = noofsubscribers;
    };
    Video.prototype.getchannel = function () {
        return this._channel;
    };
    Video.prototype.setchannel = function (channel) {
        this._channel = channel;
    };
    Video.prototype.getplaylist = function () {
        return this._playlist;
    };
    Video.prototype.setplaylist = function (playlist) {
        this._playlist = playlist;
    };
    Video.prototype.getlicense = function () {
        return this._license;
    };
    Video.prototype.setlicense = function (license) {
        this._license = license;
    };
    Video.prototype.getcategory = function () {
        return this._category;
    };
    Video.prototype.setcategory = function (category) {
        this._category = category;
    };
    Video.prototype.getdateuploaded = function () {
        return this._dateuploaded;
    };
    Video.prototype.setdateuploaded = function (dateuploaded) {
        this._dateuploaded = dateuploaded;
    };
    Video.prototype.getvideolength = function () {
        return this._videolength;
    };
    Video.prototype.setvideolength = function (videolength) {
        this._videolength = videolength;
    };
    Video.prototype.getcomments = function () {
        return this._comments;
    };
    Video.prototype.setcomments = function (comments) {
        this._comments = comments;
    };
    return Video;
}());
var video1 = new Video(); //creating a new object of the Video class
video1.setvideoid("v12345"); //setting the properties of the object through setter methods
video1.setvideotitle("edwisor Angular js");
video1.setnoofcomments(24);
console.log("videoid: " + video1.getvideoid());
console.log("Titel: " + video1.getvideotitle());
console.log("No of comments: " + video1.getnoofcomments());
video1.play();
