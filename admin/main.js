        const logoutLink = document.getElementById('logout');
        const popup = document.getElementById('popup');
        const overlay = document.getElementById('overlay');
        const yesBtn = document.getElementById('yes');
        const noBtn = document.getElementById('no');
        const yes = document.getElementById('yEs');
        const no = document.getElementById('nO');
        const addPop = document.getElementById('add-pop');

        yes.addEventListener('click', () => {
            alert('Successfully Added!');
            addPop.style.display = 'none';
            overlay.style.display = 'none';
        });

        no.addEventListener('click', () => {
            alert('Cancelled!');
            addPop.style.display = 'none';
            overlay.style.display = 'none';
        });


        document.getElementById("open-pop").addEventListener("click", openPopup);

        
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            popup.style.display = 'block';
            overlay.style.display = 'block';

        });

        yesBtn.addEventListener('click', function() {
            alert('Logged out successfully!');
            popup.style.display = 'none';
            overlay.style.display = 'none';
        });

        noBtn.addEventListener('click', function() {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        });


        function LandingPage() {
            window.location.href='./../index.html'
        }

        function openPopup() {
            document.getElementById("add-pop").style.display = "block";
            document.getElementById("overlay").style.display = "block";
        }

        function closePopup() {
            document.getElementById("add-pop").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        }


        //sweetalert//

        function showAdd() {
            swal("Good job!", "Successfully Saved", "success");
        }