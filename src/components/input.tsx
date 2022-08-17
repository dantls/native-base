import {IInputProps, Input as DefaultInput} from 'native-base';

type Props = {

} & Partial<IInputProps>

export function Input({...rest}:Props){
  return (
    <DefaultInput
      width="100%"
      height={12}
      flexDirection="row"
      alignItems="center"
      borderRadius="md"
      backgroundColor="primary.400"
      pl={4}
      pr={4}
      {...rest}
    />
  )
}