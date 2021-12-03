export { }

declare global {
    interface String {
        insertAt(char: string, index: number): string;
    }
}

String.prototype.insertAt = function (char:string, index: number) {
    let start: number = 0;
    return this.slice(start, index) + char + this.slice(index);
};