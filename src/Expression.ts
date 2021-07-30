import Alias from '../decorators/Alias';

@Alias('exp')

export class Expression {
    alias: string;

    execute() {}
}
