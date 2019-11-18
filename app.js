const github=new GitHub;
const ui=new UI;
github.getUserData()
.then(data=>{
    console.log(data.profile);
    console.log(data.repo);

    ui.showProfile(data.profile);
});