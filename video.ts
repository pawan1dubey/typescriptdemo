class Video{
   private _videoid!: string;
   private _videotitle!: string;
   private _numberofviews!: number;
   private _uploadedbyusername!: string;
   private _dateuploaded!: string;
   private _videolength!: string;
   private _description!: string;
   private _nooflikes!: number;
   private _noofdislikes!: number;
   private _noofshares!: number;
   private _noofcomments!: number;
   private _comments!: string[];
   private _channel!: string;
   private _playlist!: string;
   private _license!: string;
   private _category!: string;
   private _noofsubscribers!: number;

   play():void{
    console.log("Video is being played");
   };

   
   pause():void{};
   resume():void{};
   download():void{};
   getRelatedVidoes():void{};
   openPlaylist():void{};



  
    getvideoid(): string {
    return this._videoid;
   }

     setvideoid(videoid: string){
        this._videoid=videoid;
    } 

   
    getvideotitle(): string {
        return this._videotitle;
       }
    
        setvideotitle(videotitle: string){
            this._videotitle=videotitle;
        }

        getnumberofviews(): number{
            return this._numberofviews;
           }
        
            setnumberofviews(videotitle: number){
                this._numberofviews=videotitle;
            }


            getuploadedbyusername(): string{
                return this._uploadedbyusername;
               }
            
                setuploadedbyusername(uploadedbyusername: string){
                    this._uploadedbyusername=uploadedbyusername;
                }

                getnooflikes(): number{
                    return this._nooflikes;
                   }
                
                    setnooflikes(nooflikes: number){
                        this._nooflikes=nooflikes;
                    }     


                    getnoofdislikes(): number{
                        return this._noofdislikes;
                       }
                    
                        setnoofdislikes(noofdislikes: number){
                            this._nooflikes=noofdislikes;
                        }

                        getnoofshares(): number{
                            return this._noofdislikes;
                           }
                        
                            setnoofshares(noofshares: number){
                                this._noofshares=noofshares;
                            }

                            getnoofcomments():number{
                                return this._noofcomments;
                            }

                            setnoofcomments(noofcomments: number){
                                this._noofcomments=noofcomments;
                            }

                            getnoofsubscribers():number{
                                return this._noofsubscribers;
                            }

                            setnoofsubscribers(noofsubscribers: number){
                                this._noofsubscribers=noofsubscribers;
                            }


                            getchannel(): string{
                                return this._channel;
                               }
                            
                                setchannel(channel: string){
                                    this._channel=channel;
                                }


                                getplaylist(): string{
                                    return this._playlist;
                                   }
                                
                                    setplaylist(playlist: string){
                                        this._playlist=playlist;
                                    }

                                    getlicense(): string{
                                        return this._license;
                                       }
                                    
                                        setlicense(license: string){
                                            this._license=license;
                                        }


                                        getcategory(): string{
                                            return this._category;
                                           }
                                        
                                            setcategory(category: string){
                                                this._category=category;
                                            }


                                            getdateuploaded(): string{
                                                return this._dateuploaded;
                                               }
                                            
                                                setdateuploaded(dateuploaded: string){
                                                    this._dateuploaded=dateuploaded;
                                                }
                                           
                                                getvideolength(): string{
                                                    return this._videolength;
                                                   }
                                                
                                                    setvideolength(videolength: string){
                                                        this._videolength=videolength;
                                                    }

                                                    getcomments(): string[]{
                                                        return this._comments;
                                                       }
                                                    
                                                        setcomments(comments: string[]){
                                                            this._comments=comments;
                                                        }



}



let video1=new Video();                             //creating a new object of the Video class
video1.setvideoid("v12345");                         //setting the properties of the object through setter methods
video1.setvideotitle("edwisor Angular js");
video1.setnoofcomments(24);




console.log("videoid: "+video1.getvideoid());
console.log("Titel: "+video1.getvideotitle());
console.log("No of comments: "+video1.getnoofcomments());


video1.play();
    
    
    




