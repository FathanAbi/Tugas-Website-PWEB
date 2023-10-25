// my-component.js
import { ref } from 'vue'
export default {
  setup() {
    
    const isActive = ref(true)
    const hasError = ref(false)

    return { isActive }
  },
  template: 
  `<div>
    <ol>
        <div :class="{ active: isActive }">
            <li>learn javascript</li>
        </div>

        
        <div :class="{ active: isActive }">
            <li>learn javascript</li>
        </div>
        <div :class="{ active: isActive }">
            <li>learn javascript</li>
        </div>
    </ol>
  </div>`
}

