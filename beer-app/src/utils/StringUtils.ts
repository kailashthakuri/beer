export class StringUtils {
    public static capitalizeFirstLetter(value: string) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}
