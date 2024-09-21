// Write your code here
import {useState} from 'react'
import {Container, MainContainer, Image, Text, Button} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, toggleLock] = useState(false)

  const onToggleLock = () => {
    toggleLock(prevState => !prevState)
  }

  const imageUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  return (
    <Container>
      <MainContainer>
        <Image src={imageUrl} alt={isUnlocked ? 'unlock' : 'lock'} />
        <Text>
          {isUnlocked ? 'Your Device is Unlocked' : 'Your Device is Locked'}
        </Text>
        <Button type="button" onClick={onToggleLock}>
          {isUnlocked ? 'Lock' : 'Unlock'}
        </Button>
      </MainContainer>
    </Container>
  )
}

export default Unlock
