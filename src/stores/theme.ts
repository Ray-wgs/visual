import { defineStore } from 'pinia';
export const useThemeStore = defineStore('themeStore',{
    state: () => {
        return {
          theme:'light',
        };
    },
    actions:{
        setTheme(newTheme:string){
            this.theme = newTheme
            localStorage.setItem("vs-theme",newTheme)
        }
    }
})