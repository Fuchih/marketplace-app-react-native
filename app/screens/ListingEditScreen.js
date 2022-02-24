import { StyleSheet, Text } from 'react-native'
import * as Yup from 'yup'
import CategoryPickerItem from '../components/CategoryPickerItem'
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
})

const categories = [
  { label: 'Furniture', value: 1, backgroundColor: '#f67569', icon: 'apps' },
  { label: 'TV', value: 2, backgroundColor: 'green', icon: 'email' },
  { label: 'Smartphone', value: 3, backgroundColor: 'blue', icon: 'lock' },
]

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => alert(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          maxLength={8}
          name="price"
          numberOfLines={3}
          placeholder="Price"
          keyboardType="numeric"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          name="description"
          maxLength={255}
          multiline
          numberOfLines={3}
          placeholder="Description"
          keyboardType="numeric"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
