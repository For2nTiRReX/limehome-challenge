export class RentObject {
    constructor(
        public id: string,
        public title: string,
        public distance: number,
        public position: number[],
        public price: number,
        public img: string,
        public description?: string,
    ) {}
}
