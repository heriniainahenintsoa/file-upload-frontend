import { defineStore } from "pinia";
const useAuthStore = defineStore("auth", {
  state() {
    return { user: null, errors: {} };
  },
  actions: {
    async authenticate(url, formData) {
      const res = await fetch(`/api/auth/${url}`, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        this.errors = data.errors;
      } else {
        this.user = data.user;
        this.errors = {};
        localStorage.setItem("token", data.token);
        this.router.push({ name: "home" });
      }
    },
    async setUser() {
      if (localStorage.getItem("token")) {
        const res = await fetch("/api/user", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          this.user = data;
          this.errors = {};
        }
      }
    },
    async logout() {
      if (localStorage.getItem("token")) {
        const res = await fetch("/api/auth/logout", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          method: "POST",
        });
        if (res.ok) {
          this.user = {};
          localStorage.removeItem("token");
          window.location.reload();
        }
      }
    },
  },
});
export default useAuthStore;
