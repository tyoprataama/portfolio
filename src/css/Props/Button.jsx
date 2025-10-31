import { Button } from "@/components/ui/button"

export function ButtonWithIcon({ icon: Icon, text, link, ...props }) {
  const button = (
    <Button
      variant="outline"
      size="sm"
      {...props}
      className={`
        relative overflow-hidden
        backdrop-blur-md
        bg-orange-500/30
        border border-orange-400/50
        text-orange-200
        hover:text-white
        font-medium
        shadow-[0_0_12px_rgba(255,165,0,0.25)]
        hover:bg-orange-500/40
        hover:shadow-[0_0_20px_rgba(255,165,0,0.4)]
        transition-all duration-300
        flex items-center gap-2
        cursor-pointer
        ${props.className || ""}
      `}
    >
      {Icon && <Icon />} {text}
    </Button>
  )

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {button}
      </a>
    )
  }

  return button
}



