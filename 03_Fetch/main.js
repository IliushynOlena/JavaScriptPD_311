const gitHubUsersApi = 'https://api.github.com/users';
//const privateExchangeUrl = "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5";
const monoAPI = "https://api.monobank.ua/bank/currency"


async function showAPIResult(api)
{
    const responce = await fetch(api);
    console.log('Responce status : ' +  responce.status);

     const json =  await  responce.json();
     console.log(json);
   
}
//showAPIResult(privateExchangeUrl)
showAPIResult(monoAPI)
const avatarImg = document.getElementById('avatar-img');
const myLogin = document.getElementById('my-login');

async function showGitHubUserAvatar(login) {
    const responce = await fetch(gitHubUsersApi + '/' + login);
    const result =  await  responce.json();
    avatarImg.src = result.avatar_url;
    myLogin.innerHTML = result.login;
  
}
//showGitHubUserAvatar("IliushynOlena") ;
showGitHubUserAvatar("Onsshuk2") ;

async function showGitHubUsers()
{
    const responce = await fetch(gitHubUsersApi);
    console.log('Responce status : ' +  responce.status);

     const json =  await  responce.json();
    //console.log(json);
    console.log(json[0].login);
    console.log(json[0].id);
}

showGitHubUsers();

