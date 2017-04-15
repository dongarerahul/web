import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)

main : Program Never Model Msg
main = Html.beginnerProgram { model = model, view = view, update = update}

type alias Model = { name : String, password : String, passwordAgain : String }
model : Model
model = Model "" "" ""

type Msg = Name String | Password String | PasswordAgain String

update : Msg -> Model -> Model
update msg model = case msg of
  Name name                   -> { model | name = name }
  Password password           -> { model | password = password }
  PasswordAgain passwordAgain -> { model | passwordAgain = passwordAgain }

view : Model -> Html Msg
view model = div []
  [ input [ type_ "text", placeholder "Name", onInput Name ] [],
    input [ type_ "password", placeholder "Password", onInput Password ] [],
    input [ type_ "password", placeholder "Reenter Password", onInput PasswordAgain ] [],
    viewValidation model
  ]

viewValidation : Model -> Html Msg
viewValidation model =
    let (color, message) = if model.password == model.passwordAgain then
                             ("green", "OK")
                           else
                             ("red", "Password Do NOT Match !")
    in
      div [style [("color", color)]] [text message]
