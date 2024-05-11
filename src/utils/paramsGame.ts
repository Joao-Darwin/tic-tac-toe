import { Dimensions } from "react-native"

const params = {
    quantityField: 3,
    getWidthField(): number {
        return Math.floor(Dimensions.get('window').width / this.quantityField)
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