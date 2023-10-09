import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";

interface formDataType {
  uname: string;
  pass: string;
}
export function useSubmit() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const submit = async (data: formDataType) => {
    try {
      const res = await fetch("http://shserver.top:8080/test/users/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resData = await res.json();

      if (res.status === 200) {
        enqueueSnackbar("submit data success", { variant: "success" });
        const url = new URL("http://localhost:3000");
        url.searchParams.set("ticket", resData.ticket);
        url.searchParams.set("name", resData.name);
        url.searchParams.set("Lname", resData.Lname);
        router.replace(url.href);
      } else {
        enqueueSnackbar(resData.message, { variant: "error" });
        throw new Error("something is wrong: " + res.status);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return { submit };
}
