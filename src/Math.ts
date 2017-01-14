/**
 * This is the main programmatic entry point for D0.
 */

import Log from "./Util";
import * as rp from "request-promise-native";
import {error} from "util";

interface IMath {
    add(urls: string[]): Promise<number>;
    multiply(urls: string[]): Promise<number> ;
}

export default class Math implements IMath {
    constructor() {
        Log.trace('Math::init()');
    }

    add(urls: string[]): Promise<number> {
        return new Promise(function (fulfill, reject) {
            // TODO: implement
            //---------------------------------------------------------------------------------
            let nums : number = 0;
            let ifnum: boolean = false;
            let processList:Promise<any>[] = [];
            if (urls === undefined || urls.length == 0) {
                fulfill(0);
            }
            for(let k = 0; k < urls.length; k++) {
                var options = {uri: urls[k],};
                processList.push(rp(options));
            }
            Promise.all(processList).then(function(num:string[]){
                //console.log(num);

                for(let re of num){
                    let parsedJson: {[id: string]: any;};
                    try {
                        parsedJson = JSON.parse(re);
                    }catch(e){
                        reject('Error: URL could not be retrieved');
                    }
                    // 1. For Json Array
                    if(parsedJson instanceof  Array){
                        for(let z of parsedJson){
                            if(typeof z === 'number'){
                                nums = nums + z;
                                ifnum = true;
                            }
                        }
                    }
                    // 2. For Json Object
                    else{
                        let jsonString: string[] = Object.keys(parsedJson);
                        //console.log(jsonString);
                        for (let x of jsonString) {
                            if (parsedJson[x] instanceof Array) {
                                for (let y of parsedJson[x]) {
                                    if (typeof y === 'number') {
                                        nums = nums + y;
                                        ifnum =true;
                                    }
                                }
                            }
                        }
                    }
                }
                if(ifnum){
                    fulfill(nums);
                }
                else{
                    reject('Error: No number was provided');
                }
            }).catch(function(err) {
                //console.log('sasasas');
                Log.error("Creation failed: "+ err);
            });
        });
    }

    multiply(urls: string[]): Promise<number> {
        return new Promise(function (fulfill, reject) {
            // TODO: implement
            let nums : number = 1;
            let ifnum: boolean = false;
            let processList:Promise<any>[] = [];
            if (urls === undefined || urls.length == 0) {
                fulfill(0);
            }
            for(let k = 0; k < urls.length; k++) {
                var options = {uri: urls[k],};
                processList.push(rp(options));
            }
            Promise.all(processList).then(function(num:string[]){
                //console.log(num);

                for(let re of num){
                    let parsedJson: {[id: string]: any;};
                    try {
                        parsedJson = JSON.parse(re);
                    }catch(e){
                        reject('Error: Could not parse JSON');
                    }
                    // 1. For Json Array
                    if(parsedJson instanceof  Array){
                        for(let z of parsedJson){
                            if(typeof z === 'number'){
                                nums = nums * z;
                                ifnum = true;
                            }
                        }
                    }
                    // 2. For Json Object
                    else{
                        let jsonString: string[] = Object.keys(parsedJson);
                        //console.log(jsonString);

                        for (let x of jsonString) {
                            if (parsedJson[x] instanceof Array) {
                                for (let y of parsedJson[x]) {
                                    if (typeof y === 'number') {
                                        nums = nums * y;
                                        ifnum =true;
                                    }
                                }
                            }
                        }
                    }
                }
                if(ifnum){
                    fulfill(nums);
                }
                else{
                    reject('Error: No number was provided');
                }
            }).catch(function(err) {
                //console.log('sasasas');
                Log.error("Creation failed: "+ err);
            });
        });
    }
}
