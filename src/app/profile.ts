export class Profile {
    name: string;
    userId: string;
    membershipCode: string;

    constructor(name: string, userId: string, membershipCode: string) {
        this.name = name;
        this.userId = userId;
        this.membershipCode = membershipCode;
    }
}