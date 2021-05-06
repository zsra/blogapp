export class AgeGroup {


    static ADULT = "ADULT";
    static YOUNG = "YOUNG";
    static ELDER = "ELDER";

    static getAgeGroups() {
        return [ AgeGroup.ADULT, AgeGroup.YOUNG, AgeGroup.ELDER];
    }

    static getNumber(ageGroupName: string){
        if(ageGroupName === AgeGroup.YOUNG) return 1;
        if(ageGroupName === AgeGroup.ADULT) return 2;
        if(ageGroupName === AgeGroup.ELDER) return 3;
        else return 0;
    }
}