import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerLogin: {
        flex: 1,
        display:"flex",
        justifyContent: "start",
        alignItems: "center",
        marginTop:50,
        width:"100%"
    },
    formLogin: {
        width:"85%",
        height:"100%",
        display:"flex",
        justifyContent:"start",
        alignSelf:"center"
    },

    containerSignUp: {
        flex: 1,
        display:"flex",
        justifyContent: "start",
        alignItems: "center",
        marginTop:50,
        width:"100%",
    },
    formSignUp: {
        width:"85%",
        height:"100%",
        display:"flex",
        justifyContent:"start",
        alignItems:"center"
    },


    label: {
        alignSelf:"start",
        fontSize: 18,
        marginBottom: 8,
    },
    button: {
        
    },

  
    inputButton: {
        fontSize: 15,
        width: "100%",
        borderWidth: 1,
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        borderBlockColor: "black",
        color: "black",

    },

    loginButton: {
        backgroundColor: "black",
        padding: 15,
        width: "100%",
        borderRadius: 8,
        color: "white",
        fontSize: 15,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    navButtons:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        width:"100%"
    },
    singnUpButton: {
        backgroundColor: "black",
        padding: 15,
        width: "60%",
        borderRadius: 8,
        color: "white",
        fontSize: 15,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    line: {
        position: 'absolute',
        width: '100%',
        height: 1,
        backgroundColor: 'grey',
        bottom: 130,
    },

    askView: {
        width:"100%",
        height:"20%",
        position:"absolute",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        bottom:0,
    },
    signUpText: {
        color: 'black',
        fontWeight: 'bold',
        margin: -3,
        padding: 0
    },
    logo: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        padding: 0,
        width: "100%",
        padding: 30
    },
    logoFeat: {
        fontSize: 50,
        fontFamily: 'Pacifico',
    },
    placeholder: {
        color: '#6a6a6a',
    },
    picker: {
        fontSize: 15,
        width: "100%",
        borderWidth: 1,
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        borderBlockColor: "black",
        color: "black",
        alignSelf: "center"
    },
})

export default styles;