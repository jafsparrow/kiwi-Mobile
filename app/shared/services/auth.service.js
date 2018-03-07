"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("./backend.service");
var firebase = require("nativescript-plugin-firebase");
// import {UtilsService} from './utils.service';
require("rxjs/add/operator/share");
var AuthService = /** @class */ (function () {
    function AuthService(ngZone) {
        this.ngZone = ngZone;
    }
    //   items: BehaviorSubject<Array<Gift>> = new BehaviorSubject([]);
    //   private _allItems: Array<Gift> = [];
    AuthService.prototype.register = function (user) {
        return firebase.createUser({
            email: user.email,
            password: user.password
        }).then(function (result) {
            return JSON.stringify(result);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    AuthService.prototype.login = function (user) {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: user.email,
                password: user.password
            }
        }).then(function (result) {
            backend_service_1.BackendService.token = result.uid;
            return JSON.stringify(result);
        }, function (errorMessage) {
            alert('login failed, please try again.!');
            return false;
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.logout = function () {
        backend_service_1.BackendService.token = "";
        firebase.logout();
    };
    AuthService.prototype.resetPassword = function (email) {
        return firebase.resetPassword({
            email: email
        }).then(function (result) {
            alert(JSON.stringify(result));
        }, function (errorMessage) {
            alert('login failed, please try again.!');
            // alert(errorMessage);
        }).catch(this.handleErrors);
    };
    //   getMyWishList(): Observable<any> {
    //     return new Observable((observer: any) => {
    //       let path = 'Gifts';
    //         let onValueEvent = (snapshot: any) => {
    //           this.ngZone.run(() => {
    //             let results = this.handleSnapshot(snapshot.value);
    //             console.log(JSON.stringify(results))
    //              observer.next(results);
    //           });
    //         };
    //         firebase.addValueEventListener(onValueEvent, `/${path}`);
    //     }).share();              
    //   }
    //   getMyGift(id: string): Observable<any> {
    //     return new Observable((observer: any) => {
    //       observer.next(this._allItems.filter(s => s.id === id)[0]);
    //     }).share();
    //   }
    //   getMyMessage(): Observable<any>{
    //     return new Observable((observer:any) => {
    //       firebase.getRemoteConfig({
    //       developerMode: false, // play with this boolean to get more frequent updates during development
    //       cacheExpirationSeconds: 300, // 10 minutes, default is 12 hours.. set to a lower value during dev
    //       properties: [{
    //       key: "message",
    //       default: "Happy Holidays!"
    //     }]
    //   }).then(
    //         function (result) {
    //           console.log("Fetched at " + result.lastFetch + (result.throttled ? " (throttled)" : ""));
    //           for (let entry in result.properties) 
    //             { 
    //               observer.next(result.properties[entry]);
    //             }
    //         }
    //     );
    //   }).share();
    // }
    //   handleSnapshot(data: any) {
    //     //empty array, then refill and filter
    //     this._allItems = [];
    //     if (data) {
    //       for (let id in data) {        
    //         let result = (<any>Object).assign({id: id}, data[id]);
    //         if(BackendService.token === result.UID){
    //           this._allItems.push(result);
    //         }        
    //       }
    //       this.publishUpdates();
    //     }
    //     return this._allItems;
    //   }
    //    publishUpdates() {
    //     // here, we sort must emit a *new* value (immutability!)
    //     this._allItems.sort(function(a, b){
    //         if(a.date < b.date) return -1;
    //         if(a.date > b.date) return 1;
    //       return 0;
    //     })
    //     this.items.next([...this._allItems]);
    //   }
    //   add(gift: string) {   
    //     return firebase.push(
    //         "/Gifts",
    //         { "name": gift, "UID": BackendService.token, "date": 0 - Date.now(), "imagepath": ""}
    //       ).then(
    //         function (result:any) {
    //           return 'Gift added to your wishlist!';
    //         },
    //         function (errorMessage:any) {
    //           console.log(errorMessage);
    //         }); 
    //   }
    //   editGift(id:string, description: string, imagepath: string){
    //     this.publishUpdates();
    //     return firebase.update("/Gifts/"+id+"",{
    //         description: description, 
    //         imagepath: imagepath})
    //       .then(
    //         function (result:any) {
    //           return 'You have successfully edited this gift!';
    //         },
    //         function (errorMessage:any) {
    //           console.log(errorMessage);
    //         });  
    //   }
    //   editDescription(id:string, description: string){
    //     this.publishUpdates();
    //     return firebase.update("/Gifts/"+id+"",{
    //         description: description})
    //       .then(
    //         function (result:any) {
    //           return 'You have successfully edited the description!';
    //         },
    //         function (errorMessage:any) {
    //           console.log(errorMessage);
    //         });  
    //   }
    //   delete(gift: Gift) {
    //     return firebase.remove("/Gifts/"+gift.id+"")
    //       .catch(this.handleErrors);
    //   }
    //   uploadFile(localPath: string, file?: any): Promise<any> {
    //       let filename = this.utils.getFilename(localPath);
    //       let remotePath = `${filename}`;   
    //       return firebase.uploadFile({
    //         remoteFullPath: remotePath,
    //         localFullPath: localPath,
    //         onProgress: function(status) {
    //             console.log("Uploaded fraction: " + status.fractionCompleted);
    //             console.log("Percentage complete: " + status.percentageCompleted);
    //         }
    //       });
    //   }
    //   getDownloadUrl(remoteFilePath: string): Promise<any> {
    //       return firebase.getDownloadUrl({
    //         remoteFullPath: remoteFilePath})
    //       .then(
    //         function (url:string) {
    //           return url;
    //         },
    //         function (errorMessage:any) {
    //           console.log(errorMessage);
    //         });
    // }
    AuthService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBRWpELHFEQUFtRDtBQUNuRCx1REFBMEQ7QUFHMUQsZ0RBQWdEO0FBQ2hELG1DQUFpQztBQUdqQztJQUNFLHFCQUNVLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRXRCLENBQUM7SUFFTCxtRUFBbUU7SUFFbkUseUNBQXlDO0lBRXZDLDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FDRCxVQUFVLE1BQVU7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUNELFVBQVUsWUFBZ0I7WUFDeEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ2QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDcEIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEI7U0FDRixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBVztZQUNkLGdDQUFjLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbEMsQ0FBQyxFQUFFLFVBQUMsWUFB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QjtJQUN6QixtREFBbUQ7SUFDbkQsbUNBQW1DO0lBQ25DLE1BQU07SUFFTiw4REFBOEQ7SUFDOUQsMERBQTBEO0lBQzFELDJDQUEyQztJQUMzQyxxQ0FBcUM7SUFDckMsc0NBQXNDO0lBQ3RDLG9DQUFvQztJQUNwQyx5Q0FBeUM7SUFDekMsNkVBQTZFO0lBQzdFLGlGQUFpRjtJQUNqRixZQUFZO0lBQ1osWUFBWTtJQUNaLE1BQU07SUFFTiwyREFBMkQ7SUFDM0QseUNBQXlDO0lBQ3pDLDJDQUEyQztJQUMzQyxlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsSUFBSTtJQUVGLGtDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBek1VLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FHTyxhQUFNO09BRmIsV0FBVyxDQTBNdkI7SUFBRCxrQkFBQztDQUFBLEFBMU1ELElBME1DO0FBMU1ZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XHJcbi8vIGltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tICcuL3V0aWxzLnNlcnZpY2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICAvLyBwcml2YXRlIHV0aWxzOiBVdGlsc1NlcnZpY2VcclxuICApe31cclxuICAgIFxyXG4vLyAgIGl0ZW1zOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8R2lmdD4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XHJcbiAgXHJcbi8vICAgcHJpdmF0ZSBfYWxsSXRlbXM6IEFycmF5PEdpZnQ+ID0gW107XHJcbiAgXHJcbiAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICApXHJcbiAgfVxyXG5cclxuICBsb2dpbih1c2VyOiBVc2VyKSB7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXHJcbiAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IHJlc3VsdC51aWQ7XHJcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuXHJcbiAgICAgIH0sIChlcnJvck1lc3NhZ2U6IGFueSkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KCdsb2dpbiBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW4uIScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKXtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gXCJcIjtcclxuICAgIGZpcmViYXNlLmxvZ291dCgpOyAgICBcclxuICB9XHJcbiAgXHJcbiAgcmVzZXRQYXNzd29yZChlbWFpbCkge1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLnJlc2V0UGFzc3dvcmQoe1xyXG4gICAgZW1haWw6IGVtYWlsXHJcbiAgICB9KS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4gICAgICAgICAgICBhbGVydCgnbG9naW4gZmFpbGVkLCBwbGVhc2UgdHJ5IGFnYWluLiEnKTtcclxuICAgICAgICAgICAgLy8gYWxlcnQoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICApLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9XHJcblxyXG4vLyAgIGdldE15V2lzaExpc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuLy8gICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xyXG4vLyAgICAgICBsZXQgcGF0aCA9ICdHaWZ0cyc7XHJcbiAgICAgIFxyXG4vLyAgICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4vLyAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuLy8gICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpXHJcbi8vICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4vLyAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfTtcclxuLy8gICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuLy8gICAgIH0pLnNoYXJlKCk7ICAgICAgICAgICAgICBcclxuLy8gICB9XHJcblxyXG4vLyAgIGdldE15R2lmdChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuLy8gICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xyXG4vLyAgICAgICBvYnNlcnZlci5uZXh0KHRoaXMuX2FsbEl0ZW1zLmZpbHRlcihzID0+IHMuaWQgPT09IGlkKVswXSk7XHJcbi8vICAgICB9KS5zaGFyZSgpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgZ2V0TXlNZXNzYWdlKCk6IE9ic2VydmFibGU8YW55PntcclxuLy8gICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6YW55KSA9PiB7XHJcbi8vICAgICAgIGZpcmViYXNlLmdldFJlbW90ZUNvbmZpZyh7XHJcbi8vICAgICAgIGRldmVsb3Blck1vZGU6IGZhbHNlLCAvLyBwbGF5IHdpdGggdGhpcyBib29sZWFuIHRvIGdldCBtb3JlIGZyZXF1ZW50IHVwZGF0ZXMgZHVyaW5nIGRldmVsb3BtZW50XHJcbi8vICAgICAgIGNhY2hlRXhwaXJhdGlvblNlY29uZHM6IDMwMCwgLy8gMTAgbWludXRlcywgZGVmYXVsdCBpcyAxMiBob3Vycy4uIHNldCB0byBhIGxvd2VyIHZhbHVlIGR1cmluZyBkZXZcclxuLy8gICAgICAgcHJvcGVydGllczogW3tcclxuLy8gICAgICAga2V5OiBcIm1lc3NhZ2VcIixcclxuLy8gICAgICAgZGVmYXVsdDogXCJIYXBweSBIb2xpZGF5cyFcIlxyXG4vLyAgICAgfV1cclxuLy8gICB9KS50aGVuKFxyXG4vLyAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hlZCBhdCBcIiArIHJlc3VsdC5sYXN0RmV0Y2ggKyAocmVzdWx0LnRocm90dGxlZCA/IFwiICh0aHJvdHRsZWQpXCIgOiBcIlwiKSk7XHJcbi8vICAgICAgICAgICBmb3IgKGxldCBlbnRyeSBpbiByZXN1bHQucHJvcGVydGllcykgXHJcbi8vICAgICAgICAgICAgIHsgXHJcbi8vICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHQucHJvcGVydGllc1tlbnRyeV0pO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgKTtcclxuLy8gICB9KS5zaGFyZSgpO1xyXG4vLyB9XHJcblxyXG4gICAgXHJcblxyXG4vLyAgIGhhbmRsZVNuYXBzaG90KGRhdGE6IGFueSkge1xyXG4vLyAgICAgLy9lbXB0eSBhcnJheSwgdGhlbiByZWZpbGwgYW5kIGZpbHRlclxyXG4vLyAgICAgdGhpcy5fYWxsSXRlbXMgPSBbXTtcclxuLy8gICAgIGlmIChkYXRhKSB7XHJcbi8vICAgICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHsgICAgICAgIFxyXG4vLyAgICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgZGF0YVtpZF0pO1xyXG4vLyAgICAgICAgIGlmKEJhY2tlbmRTZXJ2aWNlLnRva2VuID09PSByZXN1bHQuVUlEKXtcclxuLy8gICAgICAgICAgIHRoaXMuX2FsbEl0ZW1zLnB1c2gocmVzdWx0KTtcclxuLy8gICAgICAgICB9ICAgICAgICBcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gdGhpcy5fYWxsSXRlbXM7XHJcbi8vICAgfVxyXG5cclxuLy8gICAgcHVibGlzaFVwZGF0ZXMoKSB7XHJcbi8vICAgICAvLyBoZXJlLCB3ZSBzb3J0IG11c3QgZW1pdCBhICpuZXcqIHZhbHVlIChpbW11dGFiaWxpdHkhKVxyXG4vLyAgICAgdGhpcy5fYWxsSXRlbXMuc29ydChmdW5jdGlvbihhLCBiKXtcclxuLy8gICAgICAgICBpZihhLmRhdGUgPCBiLmRhdGUpIHJldHVybiAtMTtcclxuLy8gICAgICAgICBpZihhLmRhdGUgPiBiLmRhdGUpIHJldHVybiAxO1xyXG4vLyAgICAgICByZXR1cm4gMDtcclxuLy8gICAgIH0pXHJcbi8vICAgICB0aGlzLml0ZW1zLm5leHQoWy4uLnRoaXMuX2FsbEl0ZW1zXSk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBhZGQoZ2lmdDogc3RyaW5nKSB7ICAgXHJcbi8vICAgICByZXR1cm4gZmlyZWJhc2UucHVzaChcclxuLy8gICAgICAgICBcIi9HaWZ0c1wiLFxyXG4vLyAgICAgICAgIHsgXCJuYW1lXCI6IGdpZnQsIFwiVUlEXCI6IEJhY2tlbmRTZXJ2aWNlLnRva2VuLCBcImRhdGVcIjogMCAtIERhdGUubm93KCksIFwiaW1hZ2VwYXRoXCI6IFwiXCJ9XHJcbi8vICAgICAgICkudGhlbihcclxuLy8gICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xyXG4vLyAgICAgICAgICAgcmV0dXJuICdHaWZ0IGFkZGVkIHRvIHlvdXIgd2lzaGxpc3QhJztcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XHJcbi8vICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4vLyAgICAgICAgIH0pOyBcclxuLy8gICB9XHJcblxyXG4vLyAgIGVkaXRHaWZ0KGlkOnN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgaW1hZ2VwYXRoOiBzdHJpbmcpe1xyXG4vLyAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xyXG4vLyAgICAgcmV0dXJuIGZpcmViYXNlLnVwZGF0ZShcIi9HaWZ0cy9cIitpZCtcIlwiLHtcclxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIFxyXG4vLyAgICAgICAgIGltYWdlcGF0aDogaW1hZ2VwYXRofSlcclxuLy8gICAgICAgLnRoZW4oXHJcbi8vICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcclxuLy8gICAgICAgICAgIHJldHVybiAnWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGVkaXRlZCB0aGlzIGdpZnQhJztcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XHJcbi8vICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4vLyAgICAgICAgIH0pOyAgXHJcbi8vICAgfVxyXG4vLyAgIGVkaXREZXNjcmlwdGlvbihpZDpzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpe1xyXG4vLyAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xyXG4vLyAgICAgcmV0dXJuIGZpcmViYXNlLnVwZGF0ZShcIi9HaWZ0cy9cIitpZCtcIlwiLHtcclxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb259KVxyXG4vLyAgICAgICAudGhlbihcclxuLy8gICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xyXG4vLyAgICAgICAgICAgcmV0dXJuICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgZWRpdGVkIHRoZSBkZXNjcmlwdGlvbiEnO1xyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcclxuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbi8vICAgICAgICAgfSk7ICBcclxuLy8gICB9XHJcbi8vICAgZGVsZXRlKGdpZnQ6IEdpZnQpIHtcclxuLy8gICAgIHJldHVybiBmaXJlYmFzZS5yZW1vdmUoXCIvR2lmdHMvXCIrZ2lmdC5pZCtcIlwiKVxyXG4vLyAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICB1cGxvYWRGaWxlKGxvY2FsUGF0aDogc3RyaW5nLCBmaWxlPzogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuLy8gICAgICAgbGV0IGZpbGVuYW1lID0gdGhpcy51dGlscy5nZXRGaWxlbmFtZShsb2NhbFBhdGgpO1xyXG4vLyAgICAgICBsZXQgcmVtb3RlUGF0aCA9IGAke2ZpbGVuYW1lfWA7ICAgXHJcbi8vICAgICAgIHJldHVybiBmaXJlYmFzZS51cGxvYWRGaWxlKHtcclxuLy8gICAgICAgICByZW1vdGVGdWxsUGF0aDogcmVtb3RlUGF0aCxcclxuLy8gICAgICAgICBsb2NhbEZ1bGxQYXRoOiBsb2NhbFBhdGgsXHJcbi8vICAgICAgICAgb25Qcm9ncmVzczogZnVuY3Rpb24oc3RhdHVzKSB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkZWQgZnJhY3Rpb246IFwiICsgc3RhdHVzLmZyYWN0aW9uQ29tcGxldGVkKTtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZXJjZW50YWdlIGNvbXBsZXRlOiBcIiArIHN0YXR1cy5wZXJjZW50YWdlQ29tcGxldGVkKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgZ2V0RG93bmxvYWRVcmwocmVtb3RlRmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbi8vICAgICAgIHJldHVybiBmaXJlYmFzZS5nZXREb3dubG9hZFVybCh7XHJcbi8vICAgICAgICAgcmVtb3RlRnVsbFBhdGg6IHJlbW90ZUZpbGVQYXRofSlcclxuLy8gICAgICAgLnRoZW4oXHJcbi8vICAgICAgICAgZnVuY3Rpb24gKHVybDpzdHJpbmcpIHtcclxuLy8gICAgICAgICAgIHJldHVybiB1cmw7XHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xyXG4vLyAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gfVxyXG5cclxuICBoYW5kbGVFcnJvcnMoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59Il19