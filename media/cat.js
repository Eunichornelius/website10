        function openMultipleWindows() { 
            const numberOfWindows = 7; // Specify how many windows you want to open 
            const url = "/media/catmaster.mp4"; // The URL to open 
 
             for (let i = 0; i < numberOfWindows; i++) { 
            window.open(url, `Window${i + 1}`, "width=854,height=480"); 
            } 
        } 