import { Dimensions } from "react-native"

const params = {
    borderWidth: 7,
    quantityFieldForLine: 3,
    getWidthField(): number {
        return Math.floor(Dimensions.get('window').width / this.quantityFieldForLine)
    },
    getHeigthField(): number {
        const heightHalfWindow = Math.floor(Dimensions.get("window").height) / 2;
        return heightHalfWindow / 3;
    },
    getHeigthBoard(): number {
        return Math.floor(Dimensions.get("window").height) / 2;
    }
}

export default params;