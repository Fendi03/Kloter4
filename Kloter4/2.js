function is_username_valid(str){
    const kcl = str.toLowerCase();

    if (str.length >= 5 && str.length <= 12 && str == kcl && str){
        return true;
    } else {
        return false
    }
}

function is_password_valid(pass){
    const bsr = str.toUpperCase();

    if (str.length <= 7 && str == bsr){
        return true;
    } else {
        return false
    }
}
-
console.log(is_username_valid('ninja_'));
console.log(is_username_valid('i_njainkk'));
console.log(is_username_valid('Ninja%in'));
console.log(is_password_valid('AKUAA1'));