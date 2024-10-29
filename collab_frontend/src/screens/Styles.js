import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerLogin: {
        flex: 1,
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        marginTop: 50,
        width: "100%"
    },
    formLogin: {
        width: "85%",
        height: "100%",
        display: "flex",
        justifyContent: "start",
        alignSelf: "center"
    },

    containerSignUp: {
        flex: 1,
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        marginTop: 50,
        width: "100%",
    },
    formSignUp: {
        width: "85%",
        height: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center"
    },


    label: {
        alignSelf: "start",
        fontSize: 18,
        marginBottom: 8,
        display: "none"
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
    inputButtonPassword: {
        fontSize: 15,
        width: "100%",
        borderWidth: 1,
        padding: 15,
        borderRadius: 8,
        borderBlockColor: "black",
        color: "black",
    },
    passwordForget: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingTop: 10,
        paddingBottom: 20,
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
    navButtons: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "100%"
    },
    singnUpButton: {
        backgroundColor: "black",
        padding: 15,
        width: "55%",
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
        width: "100%",
        height: "20%",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
    },
    signUpText: {
        color: 'black',
        fontWeight: 'bold',
        margin: -3,
        padding: 0
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: 0,
        width: "100%",
        padding: 30
    },
    logoFeat: {
        fontSize: 50,
        fontWeight: "bold"
    },
    point: {
        width: 10,
        height: 10,
        backgroundColor: "#1DB954",
        borderRadius: "50%",
        alignSelf: "flex-end",
        marginBottom: 12,
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
    containerHomePage: {
        flex: 1,
    },

    /* NAVigatio BAR */
    nav: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 60,  // Définir une hauteur fixe pour s'assurer que la barre occupe de l'espace
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderTopWidth: 0.5,
        borderTopColor: '#ccc',
        zIndex:100,
    },
    
    buttonNav: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
        alignContent: "center",

    },
    navBar: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },

    navBarHome: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        paddingVertical: 10,
    },
    

    navText: {
        fontSize: 15,
        display: "none"
    },
    iconNav: {
        fontSize: 24,
        color: "black",
    },

    /* PROFIL */

    containerProfil: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerProfliScreen: {
        height: 100,
        backgroundColor: "black",
        zIndex: 2, // Assurez-vous que le zIndex est supérieur
    },


    userDetails: {
        height: "auto",
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 20,
        flex: 1,
        display: "flex",
        alignContent: "flex-start"
    },
    userName: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        textAlign: "center",

    },
    userNameFollow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    buttonFollow: {
        borderRadius: 15,
        backgroundColor: '#0f0f0f',
        padding: 7,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userStats: {
        flexDirection: "row",
        marginVertical: 10,
        marginLeft: -10,
        marginRight: -10,

    },
    userStat: {
        flexDirection: "row",
        backgroundColor: '#f2f2f2',
        height: 35,
        paddingVertical: 5,
        paddingHorizontal: 12,
        marginRight: 12,
        borderRadius: 18,
        alignItems: 'center'
    },
    statIcon: {
        color: "black",
        fontSize: 16,
        color: "black",
        paddingRight: 12,
        borderLeftWidth: 1,
        borderLeftColor: "grey"
    },
    statNumbers: {
        fontSize: 12,
    },
    userBio: {
        borderRadius: 18,
        padding: 12,
        backgroundColor: '#f2f2f2',
    },
    /* last project */

    /* user bio */


    userBioText: {
        fontSize: 14,
        textAlign: "start"
    },

    /* user project */
    boxProjets: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    boxProjet: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",           // Aligne l'image et le texte au centre
        backgroundColor: '#f2f2f2',
        padding: 15,
        marginBottom: 15,               // Ajoute un espacement vertical entre les lignes
        borderRadius: 25,
        width: '47%',
    },

    containerAddImgProfil: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    },
    iconAddImg: {
        fontSize: 150,
    },
    buttonAddImg: {
        fontSize: 15,
        width: 300,
        borderWidth: 1,
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: "black",
        color: "white",
    },
    buttonSkipImg: {
        fontSize: 15,
        width: 300,
        borderWidth: 1,
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        borderBlockColor: "black",
        color: "black",
    },
    errorContainer: {
        padding: 20,
        backgroundColor: 'red',
        borderRadius: 5,
        margin: "auto",

    },
    errorText: {
        color: 'white',
        textAlign: 'center',
    },

    containerHomePage: {
        flex: 1,
        justifyContent: "center"
    },
    nav: {
        marginVertical: 20,
    },
    logoutButtonContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },

    containerNoAcc: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    NoAccSignUpBtn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        backgroundColor: "black",
        borderRadius: 8,
        padding: 11,
        paddingLeft:25,
        paddingRight:25
    },
    NoAccSignInBtn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderBlockColor: "black",
        paddingLeft:25,
        paddingRight:25
    },
    lineContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15, // Ajoute un peu d'espace vertical
    },
    gradientLine: {
        flex: 1,
        height: 1,
        backgroundColor: "black",
        opacity: 0.4,
    },
    orText: {
        fontSize: 15,
        fontWeight: "bold",
    },
})

export default styles;