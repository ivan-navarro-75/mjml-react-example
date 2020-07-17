import React from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl'
import { readFileSync } from 'fs'

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
  MjmlStyle,
  MjmlText,
} from 'mjml-react'

import FormattedText from './components/FormattedText'
import Button from './components/Button'

const css = readFileSync('./assets/styles.css').toString()

export const generate = (data) => {
  return (
    <IntlProvider locale="en">
      <Mjml>
        <MjmlHead>
          <MjmlTitle>Last Minute Offer</MjmlTitle>
          <MjmlPreview>Last Minute Offer...</MjmlPreview>
          <MjmlStyle>{css}</MjmlStyle>
          <MjmlStyle>{`
          .blue-column {
            background-color: blue;
          }
        `}</MjmlStyle>
          <MjmlStyle inline>{`
          .red-column {
            background-color: red;
          }
        `}</MjmlStyle>
        </MjmlHead>
        <MjmlBody width={500}>
          {data.travelers.map((t) => (
            <FormattedText>{t}</FormattedText>
          ))}
          <MjmlSection fullWidth backgroundColor="#efefef">
            <MjmlColumn>
              <MjmlImage src="https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg" />
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection>
            <MjmlColumn width="50%">
              <MjmlButton
                padding="20px"
                backgroundColor="#346DB7"
                href="https://www.wix.com/"
              >
                <MjmlText align="center" color="red" font-size="40px">
                  button
                </MjmlText>
              </MjmlButton>
            </MjmlColumn>
            <MjmlColumn width="50%">
              <Button href="https://www.wix.com/">
                <FormattedMessage
                  id="01a8388f-c97a-546c-99b8-5fb669a4d1d0"
                  defaultMessage="Hi {user}!"
                  values={{ user: data.name }}
                />
              </Button>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection>
            <MjmlColumn cssClass="blue-column">
              <MjmlText>
                <FormattedMessage
                  id="01a8388f-c97a-546c-99b8-5fb669a4d1d0"
                  defaultMessage="Hi {user}!"
                  values={{ user: data.name }}
                />
              </MjmlText>
            </MjmlColumn>
            <MjmlColumn cssClass="red-column">
              <MjmlText>I am red</MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection>
            <MjmlColumn>
              <MjmlText>
                <a href="/2">Open Second Template</a>
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
        </MjmlBody>
      </Mjml>
    </IntlProvider>
  )
}
