import { auth} from '../Database/FirebaseConnect'

export const authentication =  async (email, password) => {
   await  auth.signInWithEmailAndPassword(email, password)
}

export const signOut =  () => {
    auth.signOut().then(function() {
        return true
      }).catch(function(error) {
        alert(error)
      });
}


