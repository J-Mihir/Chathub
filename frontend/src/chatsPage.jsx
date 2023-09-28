import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const chatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '20ce1283-1480-4941-8e86-01e5ce61ddaa',
        props.user.username, 
        props.user.secret);
    return (
    <div style = {{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div>
    )
}

export default chatsPage