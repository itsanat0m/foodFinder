const [playerState, setPlayerState] = useState({
    who: null,
    budget: null,
    time: null,
    distance: null
});

function addTag(partial) {
    setPlayerState(prev => ({ ...prev, ...partial }));
}