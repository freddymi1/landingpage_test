export default function HomePage() {

    window.onload = function() {
        let project = setInterval(projectDone, 50);
        let contact = setInterval(contactDone, 30);
        let message = setInterval(messageDone, 100);
        let amis = setInterval(amisDone, 35);

        let count1: any = 1;
        let count2: any = 1;
        let count3: any = 1;
        let count4: any = 1;
        const counter1: any = document.querySelector("#counter1")
        const counter2: any = document.querySelector("#counter2")
        const counter3: any = document.querySelector("#counter3")
        const counter4: any = document.querySelector("#counter4")

        function projectDone(){
            count1++;
            counter1.innerHTML = count1;
            if(count1 === 150){
                clearInterval(project);
            }
        }

        function contactDone(){
            count2++;
            counter2.innerHTML = count2;
            if(count2 === 300){
                clearInterval(contact);
            }
        }

        function messageDone(){
            count3++;
            counter3.innerHTML = count3;
            if(count3 === 90){
                clearInterval(message);
            }
        }

        function amisDone(){
            count4++;
            counter4.innerHTML = count4;
            if(count4 === 250){
                clearInterval(amis);
            }
        }
    }

    
    return (
        <div className="homepage w-100">
            {/* <div className="homeText" data-text="Welcome...">Welcome...</div> */}
            <div className="home">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <div className="card cardHome">
                            <div className="icon">
                                Icon
                            </div>
                            <div className="cardbody">
                                <h4 className="counter" id="counter1">0</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card cardHome">
                            <div className="icon">
                                Icon 1
                            </div>
                            <div className="cardbody">
                                <h4 className="counter" id="counter2" >0</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card cardHome">
                            <div className="icon">
                                Icon 1
                            </div>
                            <div className="cardbody">
                                <h4 className="counter" id="counter3" >0</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card cardHome">
                            <div className="icon">
                                Icon 1
                            </div>
                            <div className="cardbody">
                                <h4 className="counter" id="counter4" >0</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
