export default function Alias(alias: string) {
    return (ctor: Function) => {
        ctor.prototype.alias = alias;
    }
}
