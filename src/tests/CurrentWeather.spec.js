import { mount } from '@vue/test-utils'
import CurrentWeather from '../components/CurrentWeather.vue'

describe('CurrentWeather.vue', () => {
  it('renders weather data', () => {
    const weather = {
      city: 'Bengaluru',
      country: 'IN',
      temperatureC: 29,
      condition: 'Sunny',
      humidityPercent: 60,
      windKmph: 10,
      updatedAtIso: '2026-02-03'
    }

    const wrapper = mount(CurrentWeather, {
      props: { weather }
    })

    expect(wrapper.text()).toContain('Bengaluru')
    expect(wrapper.text()).toContain('29°C')
  })
})