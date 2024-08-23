import React from "react";
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";

const ConnectPage = () => {
  return (
    <form className="h-screen justify-center items-center flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput id="email2" type="email" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password" />
        </div>
        <TextInput id="password2" type="password" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput id="repeat-password" type="password" required shadow />
      </div>
      <div className="flex items-center gap-2"></div>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Your message" />
        </div>
        <Textarea
          id="comment"
          placeholder="Leave a comment..."
          required
          rows={4}
        />
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
};

export default ConnectPage;
