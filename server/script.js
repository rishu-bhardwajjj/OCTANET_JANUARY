const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve your main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'server/public', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

function linkedin(){
    window.location.href = "https://www.linkedin.com/in/rishabh-bhardwajjj/"; 
}
function plinksbtns(element,color){
                            element.style.background=color;
                        }
                        