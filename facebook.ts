class User{
    
    private userid!:string;
    private name!:string;
    private age!:number;
    private currentcity!:string;
    private hometown!:string;
    private highschool!:string;
    private university!:string;
    private workplace!:string[];
    private relationshipstatus!:string;
    private contactnumber!:number;
    private dateofbirth!:Date;
    private emailid!:string;
    private friendList!:User[];
    private family!:User[];
    private placeslived!:string;
    private gender!:string;
    private religion!:string;
    private languagesknown!:string[];
    private politicalviews!:string[];
    private professionalskills!:string[];
    private sportsinterestedin!:string[];
    private musicinterestedin!:string[];
    private address!:{houseno:string,street:string,city:string,country:string,pincode:number};
    private profilepicture!:string;
    private photos!:HTMLImageElement[];

    uplaodprofilepic():void{
        console.log("Profile picture uploaded");

    }

    postcomment():void{};

    likepost():void{};
    unlikepost():void{};
    uploadphoto():void{};
    deletecomment():void{};
    showpersonaldetails():void{};
    editpersonaldetails():void{};
    sendFriendRequest():void{};
    acceptFriendRequest(user:User):void{};
    deactivateaccount():void{};
    deleteaccount():void{};
    

    setUserID(id:string){
        this.userid=id;
    }

    getUserid():string{
        return this.userid;
    }



    setName(name:string){
        this.name=name;
    }


    getName():string{
        return this.name;
    }


    setAge(age:number){
        this.age=age;
    }



    getAge():number{
        return this.age;
    }


    setCurrentCity(currentcity:string){

        this.currentcity=currentcity;
    }

    getCurrentCity():string{
        return this.currentcity;
    }

    setprofilepicture(imgurl:string):void{
        let img = new Image();
        img.src=imgurl;
        document.body.appendChild(img);
    }

   
}



let user1=new User();
user1.setUserID("u123456");
user1.setName("john");
user1.setAge(28);
user1.setCurrentCity("London");

user1.setprofilepicture("dummy.jpg")

console.log("userid: "+user1.getUserid());
console.log("name: "+user1.getName());
console.log("Age: "+user1.getAge());
console.log("City: "+user1.getCurrentCity());




user1.uplaodprofilepic();



