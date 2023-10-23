class Message extends React.Component {
    render() {
        return(
            <div>
                <small>{this.props.user}</small>
                <p>{this.props.content}</p>
                <hr/>
            </div>
        );
    }
}

class ContentPage extends React.Component {
    render() {
        return (
            <div class="main">
                <h2>Live Chat with Chatbot</h2>
                <h5>This is just a demo chats, Oct 31, 2022</h5>
                <Message user="Javier Loho" content="Hi, how are you bot?" />
                <Message user="Chatbot" content="Hi human, i'm okey." />
                <Message user="Javier Loho" content="Good, are you human?" />
                <Message user="Chatbot" content="Ehmm.. I'am not human. i'm your virtual bot." />
            </div>
        );
    }
}